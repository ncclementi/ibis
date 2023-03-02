window.BENCHMARK_DATA = {
  "lastUpdate": 1677765849409,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "b7d4e0218b9afc7f25eb8afb1760153eeab868d2",
          "message": "test(snowflake): avoid trying to drop a temp table that no longer exists",
          "timestamp": "2023-03-02T08:59:05-05:00",
          "tree_id": "d92f41623b84ca638e34cd7af478037dbc8d12ce",
          "url": "https://github.com/ibis-project/ibis/commit/b7d4e0218b9afc7f25eb8afb1760153eeab868d2"
        },
        "date": 1677765766601,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 73.18689811201865,
            "unit": "iter/sec",
            "range": "stddev: 0.00007865539738014716",
            "extra": "mean: 13.66364780851098 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 143.01489850553585,
            "unit": "iter/sec",
            "range": "stddev: 0.0004913010963684845",
            "extra": "mean: 6.992278500000416 msec\nrounds: 106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 311.4640080118946,
            "unit": "iter/sec",
            "range": "stddev: 0.00021830995474541237",
            "extra": "mean: 3.2106438441574627 msec\nrounds: 231"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 47.612187960056154,
            "unit": "iter/sec",
            "range": "stddev: 0.00016559006239505404",
            "extra": "mean: 21.00302554545365 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 135.46080232370107,
            "unit": "iter/sec",
            "range": "stddev: 0.0004960070756809847",
            "extra": "mean: 7.382209339129492 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5852.4305663086325,
            "unit": "iter/sec",
            "range": "stddev: 0.00005141895277728747",
            "extra": "mean: 170.86917797142547 usec\nrounds: 3214"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.18086058919404324,
            "unit": "iter/sec",
            "range": "stddev: 0.03679568556022618",
            "extra": "mean: 5.529120547800005 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7718.160371498289,
            "unit": "iter/sec",
            "range": "stddev: 0.000014383466374587426",
            "extra": "mean: 129.5645531923399 usec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5659.208560633642,
            "unit": "iter/sec",
            "range": "stddev: 0.00004426132526667395",
            "extra": "mean: 176.70315368056225 usec\nrounds: 2785"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13601.415685886115,
            "unit": "iter/sec",
            "range": "stddev: 0.000001779950672916871",
            "extra": "mean: 73.52175855030133 usec\nrounds: 1930"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.72926456060114,
            "unit": "iter/sec",
            "range": "stddev: 0.00011619352782198826",
            "extra": "mean: 17.02728626829861 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 108.4512979118578,
            "unit": "iter/sec",
            "range": "stddev: 0.0004952198705173812",
            "extra": "mean: 9.220728744184653 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.67102184495246,
            "unit": "iter/sec",
            "range": "stddev: 0.00007327381072198435",
            "extra": "mean: 6.1854003802798445 msec\nrounds: 142"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 103.03812160463244,
            "unit": "iter/sec",
            "range": "stddev: 0.0005043410210171497",
            "extra": "mean: 9.705145866663795 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.592959242107722,
            "unit": "iter/sec",
            "range": "stddev: 0.00016582081161405947",
            "extra": "mean: 178.79622516668783 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 691.7006673688423,
            "unit": "iter/sec",
            "range": "stddev: 0.000017774507648972378",
            "extra": "mean: 1.4457120647344412 msec\nrounds: 587"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5773800.8324377285,
            "unit": "iter/sec",
            "range": "stddev: 9.584232271239507e-9",
            "extra": "mean: 173.1961370025374 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 27.995754589395506,
            "unit": "iter/sec",
            "range": "stddev: 0.0003915289783156308",
            "extra": "mean: 35.71970159999864 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 69.15810327045197,
            "unit": "iter/sec",
            "range": "stddev: 0.00013962432931023243",
            "extra": "mean: 14.459621544121399 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11791.55527173003,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019069392377066773",
            "extra": "mean: 84.80645487007772 usec\nrounds: 5606"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 485605.41485969635,
            "unit": "iter/sec",
            "range": "stddev: 2.833229318407157e-7",
            "extra": "mean: 2.059285109678864 usec\nrounds: 2129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 141.12194372592344,
            "unit": "iter/sec",
            "range": "stddev: 0.000394624617238791",
            "extra": "mean: 7.086070199983396 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 143.21668959913103,
            "unit": "iter/sec",
            "range": "stddev: 0.0005299488877426685",
            "extra": "mean: 6.982426439258149 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 108.44001496333702,
            "unit": "iter/sec",
            "range": "stddev: 0.0000885384441966369",
            "extra": "mean: 9.221688141025197 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 185.413078535122,
            "unit": "iter/sec",
            "range": "stddev: 0.0036070821156941823",
            "extra": "mean: 5.393362797816738 msec\nrounds: 183"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11614.513453510648,
            "unit": "iter/sec",
            "range": "stddev: 0.000013458913778181637",
            "extra": "mean: 86.09917272924902 usec\nrounds: 4261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5295.892953490516,
            "unit": "iter/sec",
            "range": "stddev: 0.000028118366857290068",
            "extra": "mean: 188.8255689422312 usec\nrounds: 1494"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5272396056839166,
            "unit": "iter/sec",
            "range": "stddev: 0.0020210607184035245",
            "extra": "mean: 395.6886390000136 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 313.0033037838232,
            "unit": "iter/sec",
            "range": "stddev: 0.00019208533895032857",
            "extra": "mean: 3.1948544565224575 msec\nrounds: 276"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9197007720060992,
            "unit": "iter/sec",
            "range": "stddev: 0.0033381356770129976",
            "extra": "mean: 1.087310167000021 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1772.0399789997184,
            "unit": "iter/sec",
            "range": "stddev: 0.000006076123110382637",
            "extra": "mean: 564.3213538356399 usec\nrounds: 1317"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 64.43635318036061,
            "unit": "iter/sec",
            "range": "stddev: 0.016385006495767858",
            "extra": "mean: 15.51918987719478 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.917855654586981,
            "unit": "iter/sec",
            "range": "stddev: 0.00300079531086482",
            "extra": "mean: 1.0894959299999982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 134.69483641173568,
            "unit": "iter/sec",
            "range": "stddev: 0.00003833461306089924",
            "extra": "mean: 7.424189572814775 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1660703.8348288508,
            "unit": "iter/sec",
            "range": "stddev: 5.283040799536009e-7",
            "extra": "mean: 602.154326995372 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2517601.5512208315,
            "unit": "iter/sec",
            "range": "stddev: 1.489953835714678e-8",
            "extra": "mean: 397.20344131298356 nsec\nrounds: 90910"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 2517076.4297384447,
            "unit": "iter/sec",
            "range": "stddev: 1.4159188381987545e-8",
            "extra": "mean: 397.286307314834 nsec\nrounds: 114930"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.37596764369538,
            "unit": "iter/sec",
            "range": "stddev: 0.00030881965812801053",
            "extra": "mean: 10.484821540535142 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 193.86372138270644,
            "unit": "iter/sec",
            "range": "stddev: 0.00009438026254973662",
            "extra": "mean: 5.158262685084331 msec\nrounds: 181"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1173.4460392882575,
            "unit": "iter/sec",
            "range": "stddev: 0.000013545439701935828",
            "extra": "mean: 852.190869046301 usec\nrounds: 252"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.12056326394962,
            "unit": "iter/sec",
            "range": "stddev: 0.0005187388334217822",
            "extra": "mean: 24.924874394735905 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6430198.040411338,
            "unit": "iter/sec",
            "range": "stddev: 7.318066964695214e-9",
            "extra": "mean: 155.51620552203556 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.97816888486582,
            "unit": "iter/sec",
            "range": "stddev: 0.0005238150942533394",
            "extra": "mean: 9.261131303923785 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 133.96212347264583,
            "unit": "iter/sec",
            "range": "stddev: 0.00048391806105366794",
            "extra": "mean: 7.4647965714293365 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 195.580058604711,
            "unit": "iter/sec",
            "range": "stddev: 0.000037238252309115764",
            "extra": "mean: 5.112995706894182 msec\nrounds: 58"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 285.7088775745305,
            "unit": "iter/sec",
            "range": "stddev: 0.00023049917611884453",
            "extra": "mean: 3.5000662509660323 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.475771934181644,
            "unit": "iter/sec",
            "range": "stddev: 0.0003219870907004309",
            "extra": "mean: 95.45835918182567 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11625118.825915586,
            "unit": "iter/sec",
            "range": "stddev: 2.8455623746132134e-9",
            "extra": "mean: 86.02062610927688 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 731834.983631805,
            "unit": "iter/sec",
            "range": "stddev: 1.7123995805193656e-7",
            "extra": "mean: 1.366428255502899 usec\nrounds: 27549"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 140556.17560215606,
            "unit": "iter/sec",
            "range": "stddev: 3.157410729195057e-7",
            "extra": "mean: 7.114593120621735 usec\nrounds: 37736"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5520.738620807533,
            "unit": "iter/sec",
            "range": "stddev: 0.000046950356279865706",
            "extra": "mean: 181.13518293204896 usec\nrounds: 2449"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8529641120182656,
            "unit": "iter/sec",
            "range": "stddev: 0.0013623029406175122",
            "extra": "mean: 1.1723822678000146 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1872020.40149003,
            "unit": "iter/sec",
            "range": "stddev: 7.971012846228154e-8",
            "extra": "mean: 534.1822125464297 nsec\nrounds: 147059"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 547.7757405871629,
            "unit": "iter/sec",
            "range": "stddev: 0.00008982995476976672",
            "extra": "mean: 1.8255645986222322 msec\nrounds: 436"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 126.6033335709979,
            "unit": "iter/sec",
            "range": "stddev: 0.010761323876922123",
            "extra": "mean: 7.8986861703701505 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 107.46528522026365,
            "unit": "iter/sec",
            "range": "stddev: 0.0005155778866909075",
            "extra": "mean: 9.30533053488272 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 142.24616741517286,
            "unit": "iter/sec",
            "range": "stddev: 0.0005419202774076817",
            "extra": "mean: 7.030066385418365 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.14907753431433,
            "unit": "iter/sec",
            "range": "stddev: 0.00007048099969037545",
            "extra": "mean: 6.487226625001341 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.70706435280609,
            "unit": "iter/sec",
            "range": "stddev: 0.0005285150224293884",
            "extra": "mean: 10.558874428572349 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 359.3583864241853,
            "unit": "iter/sec",
            "range": "stddev: 0.00002998417434346423",
            "extra": "mean: 2.7827373390407084 msec\nrounds: 292"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 69434.07628537399,
            "unit": "iter/sec",
            "range": "stddev: 4.6998178718274334e-7",
            "extra": "mean: 14.402150262502245 usec\nrounds: 13909"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5859.13707063007,
            "unit": "iter/sec",
            "range": "stddev: 0.000044150262266151155",
            "extra": "mean: 170.67359714328438 usec\nrounds: 2311"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.8073532628736924,
            "unit": "iter/sec",
            "range": "stddev: 0.0015007250525759406",
            "extra": "mean: 553.2952635999891 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 299.9979038052065,
            "unit": "iter/sec",
            "range": "stddev: 0.00006520781631606309",
            "extra": "mean: 3.333356624549338 msec\nrounds: 277"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6750086890088415,
            "unit": "iter/sec",
            "range": "stddev: 0.05801889669203699",
            "extra": "mean: 1.481462411200016 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 143.4698977804196,
            "unit": "iter/sec",
            "range": "stddev: 0.000546276236807712",
            "extra": "mean: 6.97010324444852 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 49.23857341620055,
            "unit": "iter/sec",
            "range": "stddev: 0.00023720401555664143",
            "extra": "mean: 20.309280521741893 msec\nrounds: 46"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.71531359370908,
            "unit": "iter/sec",
            "range": "stddev: 0.000026901749898210557",
            "extra": "mean: 10.028549918365687 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 301.7702888439704,
            "unit": "iter/sec",
            "range": "stddev: 0.0001971448405074193",
            "extra": "mean: 3.3137788475824657 msec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5333.1012103360845,
            "unit": "iter/sec",
            "range": "stddev: 0.00004452547883821018",
            "extra": "mean: 187.50816092931066 usec\nrounds: 3225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 262.05032509236554,
            "unit": "iter/sec",
            "range": "stddev: 0.0040626078247216115",
            "extra": "mean: 3.8160609022237524 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 120.00866399744186,
            "unit": "iter/sec",
            "range": "stddev: 0.00007632588462224447",
            "extra": "mean: 8.332731710281486 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 303.6037750753181,
            "unit": "iter/sec",
            "range": "stddev: 0.000188703949607618",
            "extra": "mean: 3.293766685713706 msec\nrounds: 280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 317.7566705053398,
            "unit": "iter/sec",
            "range": "stddev: 0.00019588334450757218",
            "extra": "mean: 3.1470621794018174 msec\nrounds: 301"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5516.772268349905,
            "unit": "iter/sec",
            "range": "stddev: 0.00005926267447361505",
            "extra": "mean: 181.26541233849142 usec\nrounds: 2253"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5714.650699192652,
            "unit": "iter/sec",
            "range": "stddev: 0.00004320808616570573",
            "extra": "mean: 174.98882305112312 usec\nrounds: 3566"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.216568107523955,
            "unit": "iter/sec",
            "range": "stddev: 0.0006896035274036386",
            "extra": "mean: 26.869753199995706 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5865.398827053162,
            "unit": "iter/sec",
            "range": "stddev: 0.000045081303468124935",
            "extra": "mean: 170.4913901826537 usec\nrounds: 2750"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 311.14517041545145,
            "unit": "iter/sec",
            "range": "stddev: 0.0001853426289716458",
            "extra": "mean: 3.213933864584067 msec\nrounds: 288"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 134.02222196073106,
            "unit": "iter/sec",
            "range": "stddev: 0.00009954491447563448",
            "extra": "mean: 7.4614491937986465 msec\nrounds: 129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 321.5345673082299,
            "unit": "iter/sec",
            "range": "stddev: 0.00003437885199638457",
            "extra": "mean: 3.1100855138893317 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.98228448737497,
            "unit": "iter/sec",
            "range": "stddev: 0.0005211263012161587",
            "extra": "mean: 9.435539202017523 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.90075119240308,
            "unit": "iter/sec",
            "range": "stddev: 0.0005367669988763637",
            "extra": "mean: 9.718102039218422 msec\nrounds: 102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.847687750531925,
            "unit": "iter/sec",
            "range": "stddev: 0.035765145049086795",
            "extra": "mean: 72.21422218749751 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 319.27906358882933,
            "unit": "iter/sec",
            "range": "stddev: 0.00018776028338462545",
            "extra": "mean: 3.132056291945937 msec\nrounds: 298"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 103.44665325208551,
            "unit": "iter/sec",
            "range": "stddev: 0.0005776016909918697",
            "extra": "mean: 9.666818292933412 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 747.3692689507237,
            "unit": "iter/sec",
            "range": "stddev: 0.00006807465630710607",
            "extra": "mean: 1.3380266510074192 msec\nrounds: 596"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7298642.287861454,
            "unit": "iter/sec",
            "range": "stddev: 5.498121040944615e-9",
            "extra": "mean: 137.0117839126815 nsec\nrounds: 71943"
          }
        ]
      }
    ]
  }
}