window.BENCHMARK_DATA = {
  "lastUpdate": 1681260103527,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "committer": {
            "email": "96536427+ibis-squawk-bot[bot]@users.noreply.github.com",
            "name": "ibis-squawk-bot[bot]",
            "username": "ibis-squawk-bot[bot]"
          },
          "distinct": true,
          "id": "f6db03c9d3fb6c0057dba52b216a61c64bd39b11",
          "message": "chore(flake/flake-utils): `946da791` -> `cfacdce0`",
          "timestamp": "2023-04-12T00:34:25Z",
          "tree_id": "44be4c8102f695e806bb950ddc49e4c34af9432b",
          "url": "https://github.com/ibis-project/ibis/commit/f6db03c9d3fb6c0057dba52b216a61c64bd39b11"
        },
        "date": 1681260009561,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.434184006138,
            "unit": "iter/sec",
            "range": "stddev: 0.0005738319789555377",
            "extra": "mean: 11.43717427419233 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 35.87217443286409,
            "unit": "iter/sec",
            "range": "stddev: 0.0011856593198026249",
            "extra": "mean: 27.876760074066084 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 86.27552443419123,
            "unit": "iter/sec",
            "range": "stddev: 0.0009215948213697801",
            "extra": "mean: 11.590772777774008 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 51.72932792112462,
            "unit": "iter/sec",
            "range": "stddev: 0.000666508959143162",
            "extra": "mean: 19.331393625000715 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6260647504340275,
            "unit": "iter/sec",
            "range": "stddev: 0.045588862219353044",
            "extra": "mean: 1.5972788746000106 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 92.67747721045325,
            "unit": "iter/sec",
            "range": "stddev: 0.0004222659797032106",
            "extra": "mean: 10.790108126585995 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 267.1525459068509,
            "unit": "iter/sec",
            "range": "stddev: 0.0003568146109887921",
            "extra": "mean: 3.7431797500019846 msec\nrounds: 204"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1603.550659434421,
            "unit": "iter/sec",
            "range": "stddev: 0.00004929574367531607",
            "extra": "mean: 623.6160947685333 usec\nrounds: 1319"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 260.4024394708449,
            "unit": "iter/sec",
            "range": "stddev: 0.00024557406840025684",
            "extra": "mean: 3.8402098000005935 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 90.97970129204529,
            "unit": "iter/sec",
            "range": "stddev: 0.001046219903577837",
            "extra": "mean: 10.991462774646786 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8370838319156707,
            "unit": "iter/sec",
            "range": "stddev: 0.01130790649167625",
            "extra": "mean: 1.1946234796 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 6864.335957015015,
            "unit": "iter/sec",
            "range": "stddev: 0.00009140407507208586",
            "extra": "mean: 145.68051538591274 usec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 40.84163823314664,
            "unit": "iter/sec",
            "range": "stddev: 0.000453257841055398",
            "extra": "mean: 24.484816066668223 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 147871.20229774062,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010793458844376534",
            "extra": "mean: 6.762641978026842 usec\nrounds: 31445"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12163.62338051693,
            "unit": "iter/sec",
            "range": "stddev: 0.000004545625506003043",
            "extra": "mean: 82.21234485126764 usec\nrounds: 1534"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2013.9916458059015,
            "unit": "iter/sec",
            "range": "stddev: 0.0001024881520877612",
            "extra": "mean: 496.52638931371956 usec\nrounds: 1048"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 142.33218386938117,
            "unit": "iter/sec",
            "range": "stddev: 0.0133374735988535",
            "extra": "mean: 7.025817863637251 msec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 238.52176256915882,
            "unit": "iter/sec",
            "range": "stddev: 0.00044988720697500137",
            "extra": "mean: 4.192489562498736 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 726441.9379522064,
            "unit": "iter/sec",
            "range": "stddev: 4.1691987756650223e-7",
            "extra": "mean: 1.3765725073898354 usec\nrounds: 20660"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 91.53324547737627,
            "unit": "iter/sec",
            "range": "stddev: 0.0009612588097187132",
            "extra": "mean: 10.92499227777479 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5385790.198492111,
            "unit": "iter/sec",
            "range": "stddev: 3.472295861452316e-8",
            "extra": "mean: 185.67377546195087 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 246.6762229036898,
            "unit": "iter/sec",
            "range": "stddev: 0.0004298158910327455",
            "extra": "mean: 4.05389699999757 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11435.590711512492,
            "unit": "iter/sec",
            "range": "stddev: 0.00002222620298975796",
            "extra": "mean: 87.44629160199615 usec\nrounds: 3882"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 101.87527020049532,
            "unit": "iter/sec",
            "range": "stddev: 0.0003671284539977223",
            "extra": "mean: 9.815924885715178 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 110.88889502608923,
            "unit": "iter/sec",
            "range": "stddev: 0.00036437540878773024",
            "extra": "mean: 9.018035573036654 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 91.9067529157558,
            "unit": "iter/sec",
            "range": "stddev: 0.0007954938779790692",
            "extra": "mean: 10.880593300000783 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 614.8234994175942,
            "unit": "iter/sec",
            "range": "stddev: 0.00017717354842598532",
            "extra": "mean: 1.6264830491145394 msec\nrounds: 509"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 89.18265906348888,
            "unit": "iter/sec",
            "range": "stddev: 0.0008904839592613142",
            "extra": "mean: 11.212942185185383 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2016.9265775239135,
            "unit": "iter/sec",
            "range": "stddev: 0.0001636242177858602",
            "extra": "mean: 495.80386868998136 usec\nrounds: 297"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 32.730962304173154,
            "unit": "iter/sec",
            "range": "stddev: 0.0317370297611264",
            "extra": "mean: 30.552111199996748 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 91.95145752265542,
            "unit": "iter/sec",
            "range": "stddev: 0.0009410455613900356",
            "extra": "mean: 10.875303414887311 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 145.7220508676795,
            "unit": "iter/sec",
            "range": "stddev: 0.0003194536339817698",
            "extra": "mean: 6.862379399999204 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1952.8783815693807,
            "unit": "iter/sec",
            "range": "stddev: 0.00010584094582012632",
            "extra": "mean: 512.0646577061166 usec\nrounds: 1116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1557324197842677,
            "unit": "iter/sec",
            "range": "stddev: 0.11287229657936007",
            "extra": "mean: 6.421270544599997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 483997.72094849363,
            "unit": "iter/sec",
            "range": "stddev: 8.376694463248787e-7",
            "extra": "mean: 2.066125431417927 usec\nrounds: 2320"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 91.88232161102644,
            "unit": "iter/sec",
            "range": "stddev: 0.0009692501354651908",
            "extra": "mean: 10.883486425532308 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 679.767447668041,
            "unit": "iter/sec",
            "range": "stddev: 0.00009864997993069202",
            "extra": "mean: 1.4710913319408347 msec\nrounds: 479"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 72.89107529348095,
            "unit": "iter/sec",
            "range": "stddev: 0.01982948266076688",
            "extra": "mean: 13.719100671429326 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 490.68534783955613,
            "unit": "iter/sec",
            "range": "stddev: 0.000142097114560964",
            "extra": "mean: 2.0379658866989017 msec\nrounds: 406"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 248.74513942773947,
            "unit": "iter/sec",
            "range": "stddev: 0.00033745418620296456",
            "extra": "mean: 4.0201790567670574 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.4895485804488915,
            "unit": "iter/sec",
            "range": "stddev: 0.015519786585424291",
            "extra": "mean: 671.3443341999891 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 88.1671858776475,
            "unit": "iter/sec",
            "range": "stddev: 0.0009515528276438069",
            "extra": "mean: 11.342088216218366 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5052983.192811075,
            "unit": "iter/sec",
            "range": "stddev: 4.2114034189320956e-8",
            "extra": "mean: 197.90289455598534 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 39.79048459602121,
            "unit": "iter/sec",
            "range": "stddev: 0.0016176600924256747",
            "extra": "mean: 25.131636625003395 msec\nrounds: 32"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1961.7124448198604,
            "unit": "iter/sec",
            "range": "stddev: 0.00016949271986425564",
            "extra": "mean: 509.7587073174875 usec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 146.64072929997593,
            "unit": "iter/sec",
            "range": "stddev: 0.0002701097042795035",
            "extra": "mean: 6.819387797467563 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1569293.8929012201,
            "unit": "iter/sec",
            "range": "stddev: 3.172160126675772e-7",
            "extra": "mean: 637.2292688600588 nsec\nrounds: 163908"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1910.5254108899605,
            "unit": "iter/sec",
            "range": "stddev: 0.0001384162996439862",
            "extra": "mean: 523.4162258716989 usec\nrounds: 1005"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.86471934890909,
            "unit": "iter/sec",
            "range": "stddev: 0.0008509576517774228",
            "extra": "mean: 12.215274271423077 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 46.90769686351506,
            "unit": "iter/sec",
            "range": "stddev: 0.0009360372245400131",
            "extra": "mean: 21.318462999998676 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 87.70723157690095,
            "unit": "iter/sec",
            "range": "stddev: 0.0004958564137570882",
            "extra": "mean: 11.401568400015094 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.864513657118865,
            "unit": "iter/sec",
            "range": "stddev: 0.0013424458454386907",
            "extra": "mean: 101.37347209999916 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.4030569483529254,
            "unit": "iter/sec",
            "range": "stddev: 0.004223216735649616",
            "extra": "mean: 416.1366216000033 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1986.7090856865932,
            "unit": "iter/sec",
            "range": "stddev: 0.00010175693351627514",
            "extra": "mean: 503.3449573491062 usec\nrounds: 1313"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 135.27508516806995,
            "unit": "iter/sec",
            "range": "stddev: 0.004570308175389623",
            "extra": "mean: 7.392344264707496 msec\nrounds: 170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 92.00946318776508,
            "unit": "iter/sec",
            "range": "stddev: 0.0011156830402206644",
            "extra": "mean: 10.868447280898543 msec\nrounds: 89"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 88.1652197571785,
            "unit": "iter/sec",
            "range": "stddev: 0.0010165622771996271",
            "extra": "mean: 11.342341149425637 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 90.8846202477666,
            "unit": "iter/sec",
            "range": "stddev: 0.0009316681406606655",
            "extra": "mean: 11.002961747255295 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1135.5194134823778,
            "unit": "iter/sec",
            "range": "stddev: 0.00007701287704064692",
            "extra": "mean: 880.6542522538026 usec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 150.43912760390714,
            "unit": "iter/sec",
            "range": "stddev: 0.00027256680196497275",
            "extra": "mean: 6.647206853212492 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9972660.60487885,
            "unit": "iter/sec",
            "range": "stddev: 1.8185363426810032e-8",
            "extra": "mean: 100.27414344279953 nsec\nrounds: 104167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 88.78276513041638,
            "unit": "iter/sec",
            "range": "stddev: 0.0009064585552294975",
            "extra": "mean: 11.263447342860543 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1987.2436047610402,
            "unit": "iter/sec",
            "range": "stddev: 0.00010422301750955564",
            "extra": "mean: 503.2095700819965 usec\nrounds: 1591"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 269.3235589390896,
            "unit": "iter/sec",
            "range": "stddev: 0.00019826516567479876",
            "extra": "mean: 3.713006036082275 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7283942241523671,
            "unit": "iter/sec",
            "range": "stddev: 0.024461643012763892",
            "extra": "mean: 1.372882934600011 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 90.00725503482921,
            "unit": "iter/sec",
            "range": "stddev: 0.00042131225897318173",
            "extra": "mean: 11.110215499995416 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12186.67722918991,
            "unit": "iter/sec",
            "range": "stddev: 0.000008996485939112381",
            "extra": "mean: 82.05682165806186 usec\nrounds: 4654"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 90.39665415798827,
            "unit": "iter/sec",
            "range": "stddev: 0.0009563617364558381",
            "extra": "mean: 11.062356337351574 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 249.93389930499896,
            "unit": "iter/sec",
            "range": "stddev: 0.0003737605284159052",
            "extra": "mean: 4.001057890829292 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.264837804725545,
            "unit": "iter/sec",
            "range": "stddev: 0.0028060034378834513",
            "extra": "mean: 189.9393745999987 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 67838.0624915595,
            "unit": "iter/sec",
            "range": "stddev: 0.000002211502102959547",
            "extra": "mean: 14.74098703989993 usec\nrounds: 12345"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 123.28159624390032,
            "unit": "iter/sec",
            "range": "stddev: 0.00027409226616626327",
            "extra": "mean: 8.111510805080751 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 258.06980188189453,
            "unit": "iter/sec",
            "range": "stddev: 0.00032902865277277413",
            "extra": "mean: 3.874920632742801 msec\nrounds: 226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4269.017220411943,
            "unit": "iter/sec",
            "range": "stddev: 0.00003249897822908219",
            "extra": "mean: 234.2459513207361 usec\nrounds: 1931"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 104.64385342006976,
            "unit": "iter/sec",
            "range": "stddev: 0.0003557394046471309",
            "extra": "mean: 9.556223010879767 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.836591784714722,
            "unit": "iter/sec",
            "range": "stddev: 0.025159908870351622",
            "extra": "mean: 1.1953261055999973 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2015.374556618157,
            "unit": "iter/sec",
            "range": "stddev: 0.00010049027124044357",
            "extra": "mean: 496.1856825651417 usec\nrounds: 1216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1698986.614152646,
            "unit": "iter/sec",
            "range": "stddev: 3.701440584244958e-7",
            "extra": "mean: 588.5861558119108 nsec\nrounds: 116266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 69.59320141606989,
            "unit": "iter/sec",
            "range": "stddev: 0.0005045832874640519",
            "extra": "mean: 14.369219688880245 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 53.8482675014147,
            "unit": "iter/sec",
            "range": "stddev: 0.0009617339312903228",
            "extra": "mean: 18.57069960465725 msec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 255.96495849380534,
            "unit": "iter/sec",
            "range": "stddev: 0.0004304819578560622",
            "extra": "mean: 3.906784764150446 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 14.674325532385991,
            "unit": "iter/sec",
            "range": "stddev: 0.0015780708416454992",
            "extra": "mean: 68.14623253334655 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 22.854132190296205,
            "unit": "iter/sec",
            "range": "stddev: 0.0013563924561088986",
            "extra": "mean: 43.75576336364227 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1683977.0712805595,
            "unit": "iter/sec",
            "range": "stddev: 3.799501648302186e-7",
            "extra": "mean: 593.8323134290436 nsec\nrounds: 156226"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 258.9298476093828,
            "unit": "iter/sec",
            "range": "stddev: 0.0003933038490184484",
            "extra": "mean: 3.8620499306382907 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1711810.2330631595,
            "unit": "iter/sec",
            "range": "stddev: 3.344126009527702e-7",
            "extra": "mean: 584.176902722782 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6197086.879233372,
            "unit": "iter/sec",
            "range": "stddev: 3.695800030963496e-8",
            "extra": "mean: 161.3661417836454 nsec\nrounds: 200000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 195.4826713435341,
            "unit": "iter/sec",
            "range": "stddev: 0.004775199165697579",
            "extra": "mean: 5.115542943663977 msec\nrounds: 213"
          }
        ]
      }
    ]
  }
}