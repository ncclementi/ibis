window.BENCHMARK_DATA = {
  "lastUpdate": 1676887168511,
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
          "id": "ab8f064cae7c8863b4b766f8da6a9575c0a78248",
          "message": "fix(clickhouse): use a bool type supported by `clickhouse_driver`",
          "timestamp": "2023-02-20T04:51:57-05:00",
          "tree_id": "79d0c106af1753666891b8f5f1209dcebac5403c",
          "url": "https://github.com/ibis-project/ibis/commit/ab8f064cae7c8863b4b766f8da6a9575c0a78248"
        },
        "date": 1676887092203,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4208462.257584831,
            "unit": "iter/sec",
            "range": "stddev: 1.0557483648726836e-8",
            "extra": "mean: 237.6164828850686 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 183.12918087950496,
            "unit": "iter/sec",
            "range": "stddev: 0.007641571600306477",
            "extra": "mean: 5.4606261830984675 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5276.410073573041,
            "unit": "iter/sec",
            "range": "stddev: 0.000048877801150899784",
            "extra": "mean: 189.52279789785698 usec\nrounds: 2093"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 158.25642628209044,
            "unit": "iter/sec",
            "range": "stddev: 0.0006358397037404272",
            "extra": "mean: 6.31885872500059 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 273.90322017729795,
            "unit": "iter/sec",
            "range": "stddev: 0.00007584278944749527",
            "extra": "mean: 3.6509245833353057 msec\nrounds: 12"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1713070.5188871226,
            "unit": "iter/sec",
            "range": "stddev: 1.0077187428786426e-7",
            "extra": "mean: 583.7471306491452 nsec\nrounds: 106383"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 249.17353093739726,
            "unit": "iter/sec",
            "range": "stddev: 0.000303493160806",
            "extra": "mean: 4.013267365269394 msec\nrounds: 167"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.193902991855333,
            "unit": "iter/sec",
            "range": "stddev: 0.004165710679619772",
            "extra": "mean: 455.8086677999938 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4531.732889042544,
            "unit": "iter/sec",
            "range": "stddev: 0.00005222053926644553",
            "extra": "mean: 220.66613908731017 usec\nrounds: 1819"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5444504.089719079,
            "unit": "iter/sec",
            "range": "stddev: 4.937934186179667e-9",
            "extra": "mean: 183.67145722020493 nsec\nrounds: 54055"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 4519.90992068911,
            "unit": "iter/sec",
            "range": "stddev: 0.00004197834988853218",
            "extra": "mean: 221.2433472230657 usec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 95.14734570625464,
            "unit": "iter/sec",
            "range": "stddev: 0.0005411452325328203",
            "extra": "mean: 10.510014678573043 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 126.39310066960385,
            "unit": "iter/sec",
            "range": "stddev: 0.008270767297036038",
            "extra": "mean: 7.911824258620226 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 254.3388889094486,
            "unit": "iter/sec",
            "range": "stddev: 0.0002615391103360337",
            "extra": "mean: 3.9317620843898027 msec\nrounds: 237"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 606.3356456261379,
            "unit": "iter/sec",
            "range": "stddev: 0.000026299678315247565",
            "extra": "mean: 1.64925154444341 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 34.290428835324136,
            "unit": "iter/sec",
            "range": "stddev: 0.0007257927816762605",
            "extra": "mean: 29.162656576923716 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.5777412636568844,
            "unit": "iter/sec",
            "range": "stddev: 0.004097070266710282",
            "extra": "mean: 1.730878617999997 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 58228.9386274959,
            "unit": "iter/sec",
            "range": "stddev: 7.699233776354437e-7",
            "extra": "mean: 17.173591406108795 usec\nrounds: 12707"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 78.0118133912871,
            "unit": "iter/sec",
            "range": "stddev: 0.00017205482752505807",
            "extra": "mean: 12.818571400003975 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8491546732395969,
            "unit": "iter/sec",
            "range": "stddev: 0.004307878866993033",
            "extra": "mean: 1.1776417554000091 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 241.6284963935586,
            "unit": "iter/sec",
            "range": "stddev: 0.00020754300442170595",
            "extra": "mean: 4.138584707207814 msec\nrounds: 222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1335535379916094,
            "unit": "iter/sec",
            "range": "stddev: 0.08517580840569773",
            "extra": "mean: 7.487633910999989 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5108.349125898331,
            "unit": "iter/sec",
            "range": "stddev: 0.00007240386556277685",
            "extra": "mean: 195.7579592456192 usec\nrounds: 319"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 10682707.300843634,
            "unit": "iter/sec",
            "range": "stddev: 4.4030590898630766e-9",
            "extra": "mean: 93.60922955565488 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 251.50027599362906,
            "unit": "iter/sec",
            "range": "stddev: 0.00026865804705317783",
            "extra": "mean: 3.9761387777774515 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 89.28354667737044,
            "unit": "iter/sec",
            "range": "stddev: 0.0006943948330752719",
            "extra": "mean: 11.200271911391905 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8452158005100302,
            "unit": "iter/sec",
            "range": "stddev: 0.0075140814259306524",
            "extra": "mean: 1.1831297987999847 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1397692.3566631128,
            "unit": "iter/sec",
            "range": "stddev: 1.0814140031763129e-7",
            "extra": "mean: 715.4650272163083 nsec\nrounds: 121952"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 249.83826918376678,
            "unit": "iter/sec",
            "range": "stddev: 0.00021714830522729072",
            "extra": "mean: 4.00258936818225 msec\nrounds: 220"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 142.48594845670365,
            "unit": "iter/sec",
            "range": "stddev: 0.00013558189695431176",
            "extra": "mean: 7.018235909092915 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 243.6908191361164,
            "unit": "iter/sec",
            "range": "stddev: 0.00009251341752057242",
            "extra": "mean: 4.103560419489739 msec\nrounds: 236"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 128.2498931294463,
            "unit": "iter/sec",
            "range": "stddev: 0.013598073315330054",
            "extra": "mean: 7.797277452626578 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 10654.317650118825,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022208987665943492",
            "extra": "mean: 93.85866207854684 usec\nrounds: 5013"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 243.467189571349,
            "unit": "iter/sec",
            "range": "stddev: 0.0002478213596510673",
            "extra": "mean: 4.1073296231850005 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 86.60921497605989,
            "unit": "iter/sec",
            "range": "stddev: 0.00013378269615967785",
            "extra": "mean: 11.546115506028027 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7248133194986814,
            "unit": "iter/sec",
            "range": "stddev: 0.004974468811737436",
            "extra": "mean: 1.3796655954000017 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1474457.5494692826,
            "unit": "iter/sec",
            "range": "stddev: 1.2471077948821603e-7",
            "extra": "mean: 678.2155243193952 nsec\nrounds: 98040"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8573.51832502708,
            "unit": "iter/sec",
            "range": "stddev: 0.000018759563875239976",
            "extra": "mean: 116.63822973129778 usec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 18089.96512854768,
            "unit": "iter/sec",
            "range": "stddev: 0.00001857706165473286",
            "extra": "mean: 55.279266316655594 usec\nrounds: 7247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 96.30647465129583,
            "unit": "iter/sec",
            "range": "stddev: 0.0002162286647308146",
            "extra": "mean: 10.38351786440918 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 9.073890678980261,
            "unit": "iter/sec",
            "range": "stddev: 0.0002485194284218377",
            "extra": "mean: 110.206309000009 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 4687.029848854114,
            "unit": "iter/sec",
            "range": "stddev: 0.00004931622165535634",
            "extra": "mean: 213.354732580694 usec\nrounds: 2038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 263.9438500637898,
            "unit": "iter/sec",
            "range": "stddev: 0.00003451769261584561",
            "extra": "mean: 3.788684599994736 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.21046162032589,
            "unit": "iter/sec",
            "range": "stddev: 0.0005179505147625106",
            "extra": "mean: 41.30445820002251 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 92.31842042921548,
            "unit": "iter/sec",
            "range": "stddev: 0.0008706438979149396",
            "extra": "mean: 10.83207441538434 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 507.56484312880525,
            "unit": "iter/sec",
            "range": "stddev: 0.00015367497925419227",
            "extra": "mean: 1.9701916189380926 msec\nrounds: 433"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5352.3875933276695,
            "unit": "iter/sec",
            "range": "stddev: 0.00004835946486879389",
            "extra": "mean: 186.8325084017847 usec\nrounds: 2083"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.69609038548166,
            "unit": "iter/sec",
            "range": "stddev: 0.0005451157191873126",
            "extra": "mean: 18.623329795913406 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 58.866729488385886,
            "unit": "iter/sec",
            "range": "stddev: 0.0008147633777207499",
            "extra": "mean: 16.987524339997435 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 79.99900089133737,
            "unit": "iter/sec",
            "range": "stddev: 0.0008160164772777422",
            "extra": "mean: 12.500156112678205 msec\nrounds: 71"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 87.60081177920043,
            "unit": "iter/sec",
            "range": "stddev: 0.0007240897815791084",
            "extra": "mean: 11.415419328767406 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 156.66514658933238,
            "unit": "iter/sec",
            "range": "stddev: 0.0007326755801540513",
            "extra": "mean: 6.383040655630369 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 38.01315805701112,
            "unit": "iter/sec",
            "range": "stddev: 0.0011964061345992277",
            "extra": "mean: 26.306680399987467 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 77.94654448653472,
            "unit": "iter/sec",
            "range": "stddev: 0.018148813448763484",
            "extra": "mean: 12.829305090910736 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 137.51186340628246,
            "unit": "iter/sec",
            "range": "stddev: 0.0001965573145573765",
            "extra": "mean: 7.272099840909532 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 949.5324224572945,
            "unit": "iter/sec",
            "range": "stddev: 0.000014848041220138845",
            "extra": "mean: 1.0531499255308212 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4103.402442455659,
            "unit": "iter/sec",
            "range": "stddev: 0.000022805219109288113",
            "extra": "mean: 243.70020099748137 usec\nrounds: 1403"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 590447.6013425116,
            "unit": "iter/sec",
            "range": "stddev: 1.5992380615717017e-7",
            "extra": "mean: 1.6936303877368315 usec\nrounds: 22272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 143.0680426705292,
            "unit": "iter/sec",
            "range": "stddev: 0.0007467361957556256",
            "extra": "mean: 6.989681142859386 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 403.2683998968236,
            "unit": "iter/sec",
            "range": "stddev: 0.00006545886418509342",
            "extra": "mean: 2.4797380609436557 msec\nrounds: 361"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 39.497066186496895,
            "unit": "iter/sec",
            "range": "stddev: 0.00032439969582720104",
            "extra": "mean: 25.31833618421705 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4468420.761592461,
            "unit": "iter/sec",
            "range": "stddev: 2.006863678175326e-8",
            "extra": "mean: 223.79271186699378 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 121537.95508102159,
            "unit": "iter/sec",
            "range": "stddev: 5.34727668518076e-7",
            "extra": "mean: 8.227882387303323 usec\nrounds: 30864"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 13.270772109732079,
            "unit": "iter/sec",
            "range": "stddev: 0.0007097777665160193",
            "extra": "mean: 75.353565846154 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.5251456680811408,
            "unit": "iter/sec",
            "range": "stddev: 0.0018809495458285866",
            "extra": "mean: 655.6750748000013 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1413.0734591568942,
            "unit": "iter/sec",
            "range": "stddev: 0.0000340904140896646",
            "extra": "mean: 707.6772927266264 usec\nrounds: 1100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 86.18815044553595,
            "unit": "iter/sec",
            "range": "stddev: 0.0009142404944129779",
            "extra": "mean: 11.602523024692594 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 118.78004895103474,
            "unit": "iter/sec",
            "range": "stddev: 0.00023119882026620227",
            "extra": "mean: 8.41892227550971 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 67.44100277081115,
            "unit": "iter/sec",
            "range": "stddev: 0.00007387495965388958",
            "extra": "mean: 14.827774779659796 msec\nrounds: 59"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 30.701832567910934,
            "unit": "iter/sec",
            "range": "stddev: 0.03191906592802876",
            "extra": "mean: 32.57134562857281 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1390096.1824252752,
            "unit": "iter/sec",
            "range": "stddev: 1.2511020556491276e-7",
            "extra": "mean: 719.3746825887388 nsec\nrounds: 158705"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5265.7708144764365,
            "unit": "iter/sec",
            "range": "stddev: 0.00008097512733704595",
            "extra": "mean: 189.90572040295447 usec\nrounds: 2078"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 151.72235831127608,
            "unit": "iter/sec",
            "range": "stddev: 0.0008118229757042221",
            "extra": "mean: 6.590986398645239 msec\nrounds: 148"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 166.82961397468395,
            "unit": "iter/sec",
            "range": "stddev: 0.00004283423493743744",
            "extra": "mean: 5.994139626503888 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 152.44307930998744,
            "unit": "iter/sec",
            "range": "stddev: 0.0008214169071600982",
            "extra": "mean: 6.5598255068472895 msec\nrounds: 146"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 268.686247973668,
            "unit": "iter/sec",
            "range": "stddev: 0.00003662665085159517",
            "extra": "mean: 3.7218131093110607 msec\nrounds: 247"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 63.80516347187122,
            "unit": "iter/sec",
            "range": "stddev: 0.0001626024585024219",
            "extra": "mean: 15.672712764709933 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10672.7890601779,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028333754983483238",
            "extra": "mean: 93.69622076868175 usec\nrounds: 5046"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 99.9081751482333,
            "unit": "iter/sec",
            "range": "stddev: 0.00012618788164464988",
            "extra": "mean: 10.00919092472968 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 147.49548059817602,
            "unit": "iter/sec",
            "range": "stddev: 0.00011904235738688773",
            "extra": "mean: 6.779868752211559 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 392009.98560537153,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030112331447676516",
            "extra": "mean: 2.5509554264433447 usec\nrounds: 2064"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.889667699513173,
            "unit": "iter/sec",
            "range": "stddev: 0.000336562395650531",
            "extra": "mean: 204.51287519999823 msec\nrounds: 5"
          }
        ]
      }
    ]
  }
}