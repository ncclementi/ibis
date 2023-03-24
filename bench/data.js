window.BENCHMARK_DATA = {
  "lastUpdate": 1679695520969,
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
          "id": "4e9191d2526b6db8ccbbefc960f38af01ed83bd5",
          "message": "test(snowflake): remove newline",
          "timestamp": "2023-03-24T17:54:28-04:00",
          "tree_id": "082a94657b6d62663b80467de010f65274d31114",
          "url": "https://github.com/ibis-project/ibis/commit/4e9191d2526b6db8ccbbefc960f38af01ed83bd5"
        },
        "date": 1679695437773,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 115.76204325879644,
            "unit": "iter/sec",
            "range": "stddev: 0.004635942526843577",
            "extra": "mean: 8.638410068181074 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141820.05773238034,
            "unit": "iter/sec",
            "range": "stddev: 2.906007720761298e-7",
            "extra": "mean: 7.051188780976501 usec\nrounds: 41323"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13550.638071078072,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017722082057656493",
            "extra": "mean: 73.79726288567615 usec\nrounds: 5801"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.772580464712613,
            "unit": "iter/sec",
            "range": "stddev: 0.0014372764279468437",
            "extra": "mean: 564.1492839999955 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 100.11717091904707,
            "unit": "iter/sec",
            "range": "stddev: 0.006353244779036868",
            "extra": "mean: 9.988296621051965 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 40.57371825937435,
            "unit": "iter/sec",
            "range": "stddev: 0.015395095334079676",
            "extra": "mean: 24.646496375001448 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 160.62644036381462,
            "unit": "iter/sec",
            "range": "stddev: 0.00010529411064253158",
            "extra": "mean: 6.225625107143173 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5849.412031740619,
            "unit": "iter/sec",
            "range": "stddev: 0.000042299547900907074",
            "extra": "mean: 170.9573534183791 usec\nrounds: 863"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 11952.578438563236,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014868034900762836",
            "extra": "mean: 83.66395628692526 usec\nrounds: 5925"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5790045.46437676,
            "unit": "iter/sec",
            "range": "stddev: 9.312473011011266e-9",
            "extra": "mean: 172.7102155158835 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1746864.7865527635,
            "unit": "iter/sec",
            "range": "stddev: 8.457304553927142e-8",
            "extra": "mean: 572.454151974398 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5675.645819108641,
            "unit": "iter/sec",
            "range": "stddev: 0.00013432877047038304",
            "extra": "mean: 176.1914030352672 usec\nrounds: 593"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 28.09476443646304,
            "unit": "iter/sec",
            "range": "stddev: 0.00047850958198526256",
            "extra": "mean: 35.593820416666 msec\nrounds: 24"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11598.54005387608,
            "unit": "iter/sec",
            "range": "stddev: 0.000012118442953848322",
            "extra": "mean: 86.21774769539319 usec\nrounds: 4990"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1656252.2561305964,
            "unit": "iter/sec",
            "range": "stddev: 1.0683118109533109e-7",
            "extra": "mean: 603.7727624511983 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9191646327610752,
            "unit": "iter/sec",
            "range": "stddev: 0.004103476260890991",
            "extra": "mean: 1.0879443837999987 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 293.7143725632447,
            "unit": "iter/sec",
            "range": "stddev: 0.00012345902328544703",
            "extra": "mean: 3.4046682539672886 msec\nrounds: 189"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 140.20335947518043,
            "unit": "iter/sec",
            "range": "stddev: 0.000027505076307521193",
            "extra": "mean: 7.132496708661432 msec\nrounds: 127"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 122.41673662870551,
            "unit": "iter/sec",
            "range": "stddev: 0.0005998014966260949",
            "extra": "mean: 8.168817659574092 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 122.1386318092284,
            "unit": "iter/sec",
            "range": "stddev: 0.000538675009853873",
            "extra": "mean: 8.187417733333763 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 70772.69973947023,
            "unit": "iter/sec",
            "range": "stddev: 0.000001272582609638541",
            "extra": "mean: 14.12974217009127 usec\nrounds: 13889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.921503374184189,
            "unit": "iter/sec",
            "range": "stddev: 0.00013287222340714762",
            "extra": "mean: 62.80813918749928 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9220262726639822,
            "unit": "iter/sec",
            "range": "stddev: 0.004236554656620008",
            "extra": "mean: 1.084567793399998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 122.0173486163855,
            "unit": "iter/sec",
            "range": "stddev: 0.000566958975281991",
            "extra": "mean: 8.195555888891947 msec\nrounds: 54"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 84.41802582325924,
            "unit": "iter/sec",
            "range": "stddev: 0.014179140000725569",
            "extra": "mean: 11.845811250000533 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 189.70111036485397,
            "unit": "iter/sec",
            "range": "stddev: 0.00003517991952175562",
            "extra": "mean: 5.271450431031692 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 94.54962630278685,
            "unit": "iter/sec",
            "range": "stddev: 0.0005209722616389556",
            "extra": "mean: 10.576456397591548 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 744987.2732563923,
            "unit": "iter/sec",
            "range": "stddev: 1.6081714848261167e-7",
            "extra": "mean: 1.3423048096230272 usec\nrounds: 25511"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 72.42766496808353,
            "unit": "iter/sec",
            "range": "stddev: 0.00017937824613668325",
            "extra": "mean: 13.806878910712735 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 12552308.358516894,
            "unit": "iter/sec",
            "range": "stddev: 3.908932178019453e-9",
            "extra": "mean: 79.66662158371165 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5190.580617213188,
            "unit": "iter/sec",
            "range": "stddev: 0.00004310577193785523",
            "extra": "mean: 192.65667441591495 usec\nrounds: 43"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2504993.720908844,
            "unit": "iter/sec",
            "range": "stddev: 1.5912041827978885e-8",
            "extra": "mean: 399.20259745682637 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5363.530913116098,
            "unit": "iter/sec",
            "range": "stddev: 0.00011506633909562884",
            "extra": "mean: 186.44434351158068 usec\nrounds: 131"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 359.82524452376,
            "unit": "iter/sec",
            "range": "stddev: 0.00003784018471306938",
            "extra": "mean: 2.7791268545472163 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5822.230740507274,
            "unit": "iter/sec",
            "range": "stddev: 0.00004320745056106684",
            "extra": "mean: 171.75547390155012 usec\nrounds: 2663"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.6141208344323896,
            "unit": "iter/sec",
            "range": "stddev: 0.0020167894145224083",
            "extra": "mean: 382.5377873999969 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 116.17426203940238,
            "unit": "iter/sec",
            "range": "stddev: 0.0005404417094930071",
            "extra": "mean: 8.607758572727873 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.01640421672884,
            "unit": "iter/sec",
            "range": "stddev: 0.00009814431597916708",
            "extra": "mean: 10.524498461539732 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 48.004396977952474,
            "unit": "iter/sec",
            "range": "stddev: 0.0002739261789494328",
            "extra": "mean: 20.831425097565155 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1810493520578452,
            "unit": "iter/sec",
            "range": "stddev: 0.09085132891703042",
            "extra": "mean: 5.523355861999994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 106.26306585648467,
            "unit": "iter/sec",
            "range": "stddev: 0.0005146801198987096",
            "extra": "mean: 9.410607457444964 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 116.30598490098275,
            "unit": "iter/sec",
            "range": "stddev: 0.000577405256625169",
            "extra": "mean: 8.59800981739118 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5249.760403175601,
            "unit": "iter/sec",
            "range": "stddev: 0.000057076326981080985",
            "extra": "mean: 190.48488372823567 usec\nrounds: 3208"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.73813690676921,
            "unit": "iter/sec",
            "range": "stddev: 0.0006207891066613117",
            "extra": "mean: 9.733483885418911 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 102.4434189630449,
            "unit": "iter/sec",
            "range": "stddev: 0.0005607096685150684",
            "extra": "mean: 9.761486000001003 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 308.99584312670964,
            "unit": "iter/sec",
            "range": "stddev: 0.00023006519912553513",
            "extra": "mean: 3.236289491408889 msec\nrounds: 291"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 121.19350052013999,
            "unit": "iter/sec",
            "range": "stddev: 0.0006208731731403102",
            "extra": "mean: 8.251267565572293 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 311.5323081389699,
            "unit": "iter/sec",
            "range": "stddev: 0.00020268891849099156",
            "extra": "mean: 3.20993994482882 msec\nrounds: 290"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5581.844282328026,
            "unit": "iter/sec",
            "range": "stddev: 0.000023938520639237187",
            "extra": "mean: 179.1522567488982 usec\nrounds: 1667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 521.9726629475499,
            "unit": "iter/sec",
            "range": "stddev: 0.00008870531362680722",
            "extra": "mean: 1.9158091428640287 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 118.85692527547671,
            "unit": "iter/sec",
            "range": "stddev: 0.00008990643312689469",
            "extra": "mean: 8.413476940298457 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8030.14290597054,
            "unit": "iter/sec",
            "range": "stddev: 0.000012786758975302058",
            "extra": "mean: 124.53078503204271 usec\nrounds: 1884"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 121.79038001087105,
            "unit": "iter/sec",
            "range": "stddev: 0.0006793347884596916",
            "extra": "mean: 8.210829130434929 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 43.84510210911534,
            "unit": "iter/sec",
            "range": "stddev: 0.0007361066058605771",
            "extra": "mean: 22.807564628572308 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 688.8371467655762,
            "unit": "iter/sec",
            "range": "stddev: 0.00008472883787770008",
            "extra": "mean: 1.4517219413840905 msec\nrounds: 563"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 313.9031898937725,
            "unit": "iter/sec",
            "range": "stddev: 0.00022177155846052219",
            "extra": "mean: 3.18569556536972 msec\nrounds: 283"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 94.88565238792924,
            "unit": "iter/sec",
            "range": "stddev: 0.012534808757200507",
            "extra": "mean: 10.53900115384793 msec\nrounds: 104"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 68.30481633736451,
            "unit": "iter/sec",
            "range": "stddev: 0.0003051225414482956",
            "extra": "mean: 14.640256040817052 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 311.02227906741643,
            "unit": "iter/sec",
            "range": "stddev: 0.00019604623158301526",
            "extra": "mean: 3.2152037564590104 msec\nrounds: 271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.381807315367743,
            "unit": "iter/sec",
            "range": "stddev: 0.0002596672379555573",
            "extra": "mean: 96.32234250001375 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 163.81033353255262,
            "unit": "iter/sec",
            "range": "stddev: 0.00005812689622437714",
            "extra": "mean: 6.104620987181364 msec\nrounds: 156"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6656784496118235,
            "unit": "iter/sec",
            "range": "stddev: 0.04995858261744689",
            "extra": "mean: 1.5022267891999945 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 251.07950447583238,
            "unit": "iter/sec",
            "range": "stddev: 0.004116228133641184",
            "extra": "mean: 3.9828021888431553 msec\nrounds: 233"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.1426284193873,
            "unit": "iter/sec",
            "range": "stddev: 0.0005644943251528922",
            "extra": "mean: 9.333353257731462 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.76158276552428,
            "unit": "iter/sec",
            "range": "stddev: 0.00008849964775859379",
            "extra": "mean: 10.125394632183642 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 742.624035655345,
            "unit": "iter/sec",
            "range": "stddev: 0.00003111633912531221",
            "extra": "mean: 1.3465763993452327 msec\nrounds: 611"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 73.20103832176038,
            "unit": "iter/sec",
            "range": "stddev: 0.00044264229699632633",
            "extra": "mean: 13.661008408165316 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 325.7042988846365,
            "unit": "iter/sec",
            "range": "stddev: 0.000021098028421826887",
            "extra": "mean: 3.0702695771117137 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 107.94239727353968,
            "unit": "iter/sec",
            "range": "stddev: 0.00021568709787795875",
            "extra": "mean: 9.264200400014033 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 484686.4964257331,
            "unit": "iter/sec",
            "range": "stddev: 9.613958640186305e-7",
            "extra": "mean: 2.0631893138645068 usec\nrounds: 861"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 181.04320895940037,
            "unit": "iter/sec",
            "range": "stddev: 0.0038908778253328533",
            "extra": "mean: 5.523543278689088 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 310.825036109325,
            "unit": "iter/sec",
            "range": "stddev: 0.00018989838403960375",
            "extra": "mean: 3.2172440563902156 msec\nrounds: 266"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 58.56570901403405,
            "unit": "iter/sec",
            "range": "stddev: 0.00042306331143745823",
            "extra": "mean: 17.07483810638015 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1765.9358515591657,
            "unit": "iter/sec",
            "range": "stddev: 0.000007667825355084556",
            "extra": "mean: 566.2719849744758 usec\nrounds: 1331"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5541.283771650175,
            "unit": "iter/sec",
            "range": "stddev: 0.000044398710353950335",
            "extra": "mean: 180.46359674198808 usec\nrounds: 2517"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 284.9045236410748,
            "unit": "iter/sec",
            "range": "stddev: 0.00023578896270057127",
            "extra": "mean: 3.5099477790665365 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1851317.6641867785,
            "unit": "iter/sec",
            "range": "stddev: 7.3719610233511e-8",
            "extra": "mean: 540.1558140694705 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 303.83324947909307,
            "unit": "iter/sec",
            "range": "stddev: 0.00019595406251079298",
            "extra": "mean: 3.291279021352831 msec\nrounds: 281"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7305746.820116637,
            "unit": "iter/sec",
            "range": "stddev: 6.0398686136238766e-9",
            "extra": "mean: 136.87854570136858 nsec\nrounds: 53476"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.522854142979635,
            "unit": "iter/sec",
            "range": "stddev: 0.0004644162960231127",
            "extra": "mean: 181.06579933332986 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 48.53722986329605,
            "unit": "iter/sec",
            "range": "stddev: 0.00018206537162404897",
            "extra": "mean: 20.602741500008886 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6263408.55531941,
            "unit": "iter/sec",
            "range": "stddev: 9.144939689703644e-9",
            "extra": "mean: 159.65747582444538 nsec\nrounds: 196040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 301.0479512284039,
            "unit": "iter/sec",
            "range": "stddev: 0.0002178316020730897",
            "extra": "mean: 3.321729963348277 msec\nrounds: 191"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.6924038174649,
            "unit": "iter/sec",
            "range": "stddev: 0.00008348683395429212",
            "extra": "mean: 9.034043579440464 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5570.933714059846,
            "unit": "iter/sec",
            "range": "stddev: 0.00004527710099645836",
            "extra": "mean: 179.50312305389915 usec\nrounds: 2828"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 153.87194864460673,
            "unit": "iter/sec",
            "range": "stddev: 0.00003007673682985543",
            "extra": "mean: 6.498910352462417 msec\nrounds: 122"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8493302123766108,
            "unit": "iter/sec",
            "range": "stddev: 0.002980916041776415",
            "extra": "mean: 1.1773983609999958 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1184.4094204782791,
            "unit": "iter/sec",
            "range": "stddev: 0.000012527271043056015",
            "extra": "mean: 844.3026395350585 usec\nrounds: 258"
          }
        ]
      }
    ]
  }
}