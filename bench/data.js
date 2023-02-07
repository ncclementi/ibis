window.BENCHMARK_DATA = {
  "lastUpdate": 1675771709570,
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
          "id": "97965e025ddb0a052d52a331f1998f90a3c979e7",
          "message": "chore: relock and ignore some new ruff lints",
          "timestamp": "2023-02-07T07:02:08-05:00",
          "tree_id": "cb32cf6a85733f040629d8454efdf123792c3f31",
          "url": "https://github.com/ibis-project/ibis/commit/97965e025ddb0a052d52a331f1998f90a3c979e7"
        },
        "date": 1675771629407,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 95.48053134916431,
            "unit": "iter/sec",
            "range": "stddev: 0.00006432463075815159",
            "extra": "mean: 10.473339285713479 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 267.66458187165756,
            "unit": "iter/sec",
            "range": "stddev: 0.00007969851157614948",
            "extra": "mean: 3.7360191363663118 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1592200.0109506757,
            "unit": "iter/sec",
            "range": "stddev: 1.5825011953894008e-7",
            "extra": "mean: 628.0617969616249 nsec\nrounds: 135136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 41.804054940003795,
            "unit": "iter/sec",
            "range": "stddev: 0.008026268549355063",
            "extra": "mean: 23.921124432430698 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5737637408624952,
            "unit": "iter/sec",
            "range": "stddev: 0.001174280417264116",
            "extra": "mean: 635.4193924000015 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.621311229487947,
            "unit": "iter/sec",
            "range": "stddev: 0.00017780494343787618",
            "extra": "mean: 73.41437128572181 msec\nrounds: 14"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1449.596093586544,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057529029670900174",
            "extra": "mean: 689.8473336292126 usec\nrounds: 1127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5538582.213854534,
            "unit": "iter/sec",
            "range": "stddev: 5.241871897238036e-9",
            "extra": "mean: 180.55162158623577 nsec\nrounds: 54348"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 159.75538588715366,
            "unit": "iter/sec",
            "range": "stddev: 0.0005911560401436492",
            "extra": "mean: 6.259569869565271 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1446748.6210792384,
            "unit": "iter/sec",
            "range": "stddev: 8.832372820705398e-8",
            "extra": "mean: 691.2050825070253 nsec\nrounds: 178572"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1473765.9894243306,
            "unit": "iter/sec",
            "range": "stddev: 1.0525533158404916e-7",
            "extra": "mean: 678.5337748163201 nsec\nrounds: 142858"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 18894.64041088415,
            "unit": "iter/sec",
            "range": "stddev: 0.000060688591179876515",
            "extra": "mean: 52.9250611948114 usec\nrounds: 5556"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 150.09697222475373,
            "unit": "iter/sec",
            "range": "stddev: 0.00011309635653149321",
            "extra": "mean: 6.6623595744663655 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 98.92273512409434,
            "unit": "iter/sec",
            "range": "stddev: 0.00008342745546402777",
            "extra": "mean: 10.10889962500069 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 250.09220390115007,
            "unit": "iter/sec",
            "range": "stddev: 0.00019864425263546207",
            "extra": "mean: 3.9985252814808017 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.183023620539977,
            "unit": "iter/sec",
            "range": "stddev: 0.0001957970591774072",
            "extra": "mean: 108.8965945555521 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5877531411312902,
            "unit": "iter/sec",
            "range": "stddev: 0.001094741803603958",
            "extra": "mean: 1.7013945651999904 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 613.490906598286,
            "unit": "iter/sec",
            "range": "stddev: 0.00006536447561119063",
            "extra": "mean: 1.6300160104162724 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 123.97566803952422,
            "unit": "iter/sec",
            "range": "stddev: 0.00010908496179451544",
            "extra": "mean: 8.066098903223443 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.32303688879713,
            "unit": "iter/sec",
            "range": "stddev: 0.0006069306940973017",
            "extra": "mean: 11.451731818185223 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 71.5667748226166,
            "unit": "iter/sec",
            "range": "stddev: 0.015776321279426082",
            "extra": "mean: 13.972964444444672 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10333.457869189771,
            "unit": "iter/sec",
            "range": "stddev: 0.000002734071290439556",
            "extra": "mean: 96.77302725369395 usec\nrounds: 5137"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 161.7570064867232,
            "unit": "iter/sec",
            "range": "stddev: 0.0006049099826122679",
            "extra": "mean: 6.182112427272686 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 277.43495938687425,
            "unit": "iter/sec",
            "range": "stddev: 0.000051405045351100174",
            "extra": "mean: 3.604448416342267 msec\nrounds: 257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5140.863469411219,
            "unit": "iter/sec",
            "range": "stddev: 0.00004895346197363429",
            "extra": "mean: 194.5198517622818 usec\nrounds: 2071"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4717047.514430556,
            "unit": "iter/sec",
            "range": "stddev: 1.3201727521229784e-8",
            "extra": "mean: 211.99701655342668 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11399361.39746258,
            "unit": "iter/sec",
            "range": "stddev: 3.246966076340527e-9",
            "extra": "mean: 87.72421236012265 nsec\nrounds: 113637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56118.98039122366,
            "unit": "iter/sec",
            "range": "stddev: 0.000007124168126287555",
            "extra": "mean: 17.81928312005448 usec\nrounds: 12500"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.0283612924992,
            "unit": "iter/sec",
            "range": "stddev: 0.0006697695343668324",
            "extra": "mean: 28.548295241380167 msec\nrounds: 29"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 158.45758137455542,
            "unit": "iter/sec",
            "range": "stddev: 0.0006434336036247717",
            "extra": "mean: 6.310837205297497 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 245.85836722018186,
            "unit": "iter/sec",
            "range": "stddev: 0.00023949274151964154",
            "extra": "mean: 4.067382417391702 msec\nrounds: 230"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.2423435209545,
            "unit": "iter/sec",
            "range": "stddev: 0.00007031208579102117",
            "extra": "mean: 13.84229734615325 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5156.362669540946,
            "unit": "iter/sec",
            "range": "stddev: 0.00005131600750495284",
            "extra": "mean: 193.9351562501764 usec\nrounds: 384"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 70.53316797537803,
            "unit": "iter/sec",
            "range": "stddev: 0.021485136914334055",
            "extra": "mean: 14.177726999999255 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 370297.19387247687,
            "unit": "iter/sec",
            "range": "stddev: 6.352690136928354e-7",
            "extra": "mean: 2.7005335620889976 usec\nrounds: 2041"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 333.6717968832173,
            "unit": "iter/sec",
            "range": "stddev: 0.00003108458792290035",
            "extra": "mean: 2.9969569179680855 msec\nrounds: 256"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10930.882730068402,
            "unit": "iter/sec",
            "range": "stddev: 0.000001762250053843186",
            "extra": "mean: 91.48391988958264 usec\nrounds: 6154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 6023.943023628109,
            "unit": "iter/sec",
            "range": "stddev: 0.00005011051846979062",
            "extra": "mean: 166.00422614849347 usec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.930125221838227,
            "unit": "iter/sec",
            "range": "stddev: 0.0007440293352864834",
            "extra": "mean: 202.83460459999105 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 9810.870784002278,
            "unit": "iter/sec",
            "range": "stddev: 0.00001250293501679729",
            "extra": "mean: 101.92775157436706 usec\nrounds: 4287"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 411.51687495218243,
            "unit": "iter/sec",
            "range": "stddev: 0.000026425862979054365",
            "extra": "mean: 2.430034005570727 msec\nrounds: 359"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8695256423304932,
            "unit": "iter/sec",
            "range": "stddev: 0.0035142601067099655",
            "extra": "mean: 1.1500523404000034 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5799.762433402363,
            "unit": "iter/sec",
            "range": "stddev: 0.000058527564366725876",
            "extra": "mean: 172.42085541999722 usec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1560452.5325938505,
            "unit": "iter/sec",
            "range": "stddev: 9.113946670606926e-8",
            "extra": "mean: 640.8397430313099 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 160.63094699204245,
            "unit": "iter/sec",
            "range": "stddev: 0.0006603914549761887",
            "extra": "mean: 6.225450442308227 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.2279922309519593,
            "unit": "iter/sec",
            "range": "stddev: 0.0009132659648473107",
            "extra": "mean: 448.8345991999836 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 573460.5167458062,
            "unit": "iter/sec",
            "range": "stddev: 1.5529070304534595e-7",
            "extra": "mean: 1.7437992168574403 usec\nrounds: 22472"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 247.6597975053846,
            "unit": "iter/sec",
            "range": "stddev: 0.0002852247125316737",
            "extra": "mean: 4.037797050925305 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 238.36729968471727,
            "unit": "iter/sec",
            "range": "stddev: 0.00021191400031941797",
            "extra": "mean: 4.195206311111785 msec\nrounds: 225"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 90.47044485443756,
            "unit": "iter/sec",
            "range": "stddev: 0.0006506219444942927",
            "extra": "mean: 11.053333512496266 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.590237814315024,
            "unit": "iter/sec",
            "range": "stddev: 0.00036874013446120177",
            "extra": "mean: 37.60778699999605 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 221.82534702469528,
            "unit": "iter/sec",
            "range": "stddev: 0.00036008313854367965",
            "extra": "mean: 4.5080511015212 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 512.0585939319327,
            "unit": "iter/sec",
            "range": "stddev: 0.000022217278119856668",
            "extra": "mean: 1.9529015074648444 msec\nrounds: 469"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 93.64510793506282,
            "unit": "iter/sec",
            "range": "stddev: 0.0006255436870665436",
            "extra": "mean: 10.678614420450444 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 81.91293732591241,
            "unit": "iter/sec",
            "range": "stddev: 0.0006238101259283392",
            "extra": "mean: 12.208083761191887 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 143.78212924010856,
            "unit": "iter/sec",
            "range": "stddev: 0.000044229393173447236",
            "extra": "mean: 6.954967249998453 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.48498527517521,
            "unit": "iter/sec",
            "range": "stddev: 0.0005057354764421017",
            "extra": "mean: 26.6773480810798 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5981.912607374219,
            "unit": "iter/sec",
            "range": "stddev: 0.00005411765156906192",
            "extra": "mean: 167.17061342007023 usec\nrounds: 2310"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 140.77915939595445,
            "unit": "iter/sec",
            "range": "stddev: 0.012063946918149408",
            "extra": "mean: 7.103324130437568 msec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 173.27947136345352,
            "unit": "iter/sec",
            "range": "stddev: 0.000027129791304179768",
            "extra": "mean: 5.771024069565062 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 93.84152397346794,
            "unit": "iter/sec",
            "range": "stddev: 0.0006184090916330976",
            "extra": "mean: 10.656263428572757 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 249.3786668170597,
            "unit": "iter/sec",
            "range": "stddev: 0.0002250105218927401",
            "extra": "mean: 4.009966100001586 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 56.85643449285748,
            "unit": "iter/sec",
            "range": "stddev: 0.00015707554470929873",
            "extra": "mean: 17.588158823529884 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 147.31459443202272,
            "unit": "iter/sec",
            "range": "stddev: 0.0007077449613004588",
            "extra": "mean: 6.788193687499462 msec\nrounds: 144"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4416053.024675456,
            "unit": "iter/sec",
            "range": "stddev: 1.2243590290934179e-8",
            "extra": "mean: 226.44655632823677 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4559.973486510183,
            "unit": "iter/sec",
            "range": "stddev: 0.00005271810806996934",
            "extra": "mean: 219.29952070079145 usec\nrounds: 2053"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7413484297597448,
            "unit": "iter/sec",
            "range": "stddev: 0.0032782351486446335",
            "extra": "mean: 1.3488933945999975 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.15402690906370436,
            "unit": "iter/sec",
            "range": "stddev: 0.07929543241077432",
            "extra": "mean: 6.492372054200007 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 989.7264060440632,
            "unit": "iter/sec",
            "range": "stddev: 0.000017563729445362563",
            "extra": "mean: 1.010380236288734 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 65.83602203555925,
            "unit": "iter/sec",
            "range": "stddev: 0.00022479919441833996",
            "extra": "mean: 15.189253072730935 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 143.6268833348295,
            "unit": "iter/sec",
            "range": "stddev: 0.0006563110301501023",
            "extra": "mean: 6.962484855072393 msec\nrounds: 138"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 45.48472632782587,
            "unit": "iter/sec",
            "range": "stddev: 0.0003779577290288654",
            "extra": "mean: 21.98540215000122 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.4058267133885,
            "unit": "iter/sec",
            "range": "stddev: 0.0002217259884900203",
            "extra": "mean: 14.835512725806753 msec\nrounds: 62"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 6048.074794142085,
            "unit": "iter/sec",
            "range": "stddev: 0.00004785648835825468",
            "extra": "mean: 165.3418706012959 usec\nrounds: 2643"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 121484.75664438661,
            "unit": "iter/sec",
            "range": "stddev: 3.202700208626113e-7",
            "extra": "mean: 8.231485394725087 usec\nrounds: 35843"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 87.82724640598126,
            "unit": "iter/sec",
            "range": "stddev: 0.00008169412116026985",
            "extra": "mean: 11.385988300003191 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 264.15924201053275,
            "unit": "iter/sec",
            "range": "stddev: 0.000016405648587053286",
            "extra": "mean: 3.7855953567588116 msec\nrounds: 185"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 102.61919804456628,
            "unit": "iter/sec",
            "range": "stddev: 0.00010891546138932366",
            "extra": "mean: 9.7447652978706 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5157.969857683396,
            "unit": "iter/sec",
            "range": "stddev: 0.000048895504446953534",
            "extra": "mean: 193.8747273814297 usec\nrounds: 2509"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 252.20653076782023,
            "unit": "iter/sec",
            "range": "stddev: 0.0002010465051324116",
            "extra": "mean: 3.9650043833345214 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 143.52897151815677,
            "unit": "iter/sec",
            "range": "stddev: 0.00012180219006158401",
            "extra": "mean: 6.967234485293428 msec\nrounds: 136"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8659489280727838,
            "unit": "iter/sec",
            "range": "stddev: 0.0101097350589817",
            "extra": "mean: 1.1548025149999943 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}