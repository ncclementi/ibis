window.BENCHMARK_DATA = {
  "lastUpdate": 1678967169657,
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
          "id": "c2e985f493fcb3306cc74793ac457661ee942967",
          "message": "fix(trino,duckdb,postgres): make cumulative `notany`/`notall` aggregations work",
          "timestamp": "2023-03-16T07:40:29-04:00",
          "tree_id": "ae61bdccaba5439a04857c9b63a2490dd2324af7",
          "url": "https://github.com/ibis-project/ibis/commit/c2e985f493fcb3306cc74793ac457661ee942967"
        },
        "date": 1678967090383,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 251.4152450352532,
            "unit": "iter/sec",
            "range": "stddev: 0.008161349975387758",
            "extra": "mean: 3.9774835446425727 msec\nrounds: 112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8209139692928957,
            "unit": "iter/sec",
            "range": "stddev: 0.006491961122949211",
            "extra": "mean: 1.218154444199996 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 62.41631976644008,
            "unit": "iter/sec",
            "range": "stddev: 0.00031880327575746985",
            "extra": "mean: 16.021450859998936 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 318.031888580404,
            "unit": "iter/sec",
            "range": "stddev: 0.0001920384626407766",
            "extra": "mean: 3.1443387783020467 msec\nrounds: 212"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6983338.984722907,
            "unit": "iter/sec",
            "range": "stddev: 4.591614621382568e-9",
            "extra": "mean: 143.19797480661342 nsec\nrounds: 58824"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 36.68226779293012,
            "unit": "iter/sec",
            "range": "stddev: 0.0010369327994652591",
            "extra": "mean: 27.26112806451767 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 142.94107385502764,
            "unit": "iter/sec",
            "range": "stddev: 0.010486340197401557",
            "extra": "mean: 6.995889795918356 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 98.7432513537511,
            "unit": "iter/sec",
            "range": "stddev: 0.0002987314710997138",
            "extra": "mean: 10.127274383719303 msec\nrounds: 86"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 161.31716386798118,
            "unit": "iter/sec",
            "range": "stddev: 0.00011063489551895645",
            "extra": "mean: 6.198968392590764 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1160.5697015268042,
            "unit": "iter/sec",
            "range": "stddev: 0.000010662556300773292",
            "extra": "mean: 861.6457923073775 usec\nrounds: 260"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 304.34562648499974,
            "unit": "iter/sec",
            "range": "stddev: 0.00020092729374099151",
            "extra": "mean: 3.2857380326090766 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.42986791032043,
            "unit": "iter/sec",
            "range": "stddev: 0.0005934218654544703",
            "extra": "mean: 8.303587949998104 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.68362925186601,
            "unit": "iter/sec",
            "range": "stddev: 0.0001305387670465783",
            "extra": "mean: 8.35536160000269 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5598661.853591556,
            "unit": "iter/sec",
            "range": "stddev: 3.057180931858944e-8",
            "extra": "mean: 178.6141092549914 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 310.45412566640476,
            "unit": "iter/sec",
            "range": "stddev: 0.00026532085912528875",
            "extra": "mean: 3.221087810810862 msec\nrounds: 259"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 488631.40082417364,
            "unit": "iter/sec",
            "range": "stddev: 4.1145994871085803e-7",
            "extra": "mean: 2.046532413416948 usec\nrounds: 2175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.655500094207103,
            "unit": "iter/sec",
            "range": "stddev: 0.00008008722303699757",
            "extra": "mean: 63.875314999999475 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8354.302268508924,
            "unit": "iter/sec",
            "range": "stddev: 0.000013665311704915433",
            "extra": "mean: 119.69880522152569 usec\nrounds: 3409"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 97.02039192116625,
            "unit": "iter/sec",
            "range": "stddev: 0.012559592413069453",
            "extra": "mean: 10.307111527776017 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 148841.85532574548,
            "unit": "iter/sec",
            "range": "stddev: 3.4393986838496524e-7",
            "extra": "mean: 6.718540277608512 usec\nrounds: 32574"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5605.383907403944,
            "unit": "iter/sec",
            "range": "stddev: 0.00005246609365515682",
            "extra": "mean: 178.39991274801662 usec\nrounds: 1914"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 112.3727882175733,
            "unit": "iter/sec",
            "range": "stddev: 0.0008272584458989897",
            "extra": "mean: 8.898951568807083 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.4549974183167,
            "unit": "iter/sec",
            "range": "stddev: 0.0007253905211978583",
            "extra": "mean: 9.760382852942437 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 5221.783589039364,
            "unit": "iter/sec",
            "range": "stddev: 0.00005412724388800089",
            "extra": "mean: 191.50544693177662 usec\nrounds: 3797"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 56.40069744651955,
            "unit": "iter/sec",
            "range": "stddev: 0.0013119822060079225",
            "extra": "mean: 17.730277199997804 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 102.13727438630592,
            "unit": "iter/sec",
            "range": "stddev: 0.01445839685917286",
            "extra": "mean: 9.790744916667517 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5099.626818362951,
            "unit": "iter/sec",
            "range": "stddev: 0.000052888755194509845",
            "extra": "mean: 196.092780044053 usec\nrounds: 3187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5294.925079873081,
            "unit": "iter/sec",
            "range": "stddev: 0.00005285926755665306",
            "extra": "mean: 188.86008487658714 usec\nrounds: 2592"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 277.07588540823053,
            "unit": "iter/sec",
            "range": "stddev: 0.0003196038475308795",
            "extra": "mean: 3.6091195685494144 msec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 775894.1282015822,
            "unit": "iter/sec",
            "range": "stddev: 1.6954479285380433e-7",
            "extra": "mean: 1.2888356331782853 usec\nrounds: 23697"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 106.13489247304257,
            "unit": "iter/sec",
            "range": "stddev: 0.0008096030768818756",
            "extra": "mean: 9.42197214034953 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 71466.73972290212,
            "unit": "iter/sec",
            "range": "stddev: 9.273739966311843e-7",
            "extra": "mean: 13.992523009686725 usec\nrounds: 13038"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.8152125007382168,
            "unit": "iter/sec",
            "range": "stddev: 0.062060660244613756",
            "extra": "mean: 1.2266740256000106 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1794440.3920665183,
            "unit": "iter/sec",
            "range": "stddev: 1.0202173665695357e-7",
            "extra": "mean: 557.2768002889064 nsec\nrounds: 99010"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1935884.2721104396,
            "unit": "iter/sec",
            "range": "stddev: 8.755394974751526e-8",
            "extra": "mean: 516.5598039131914 nsec\nrounds: 116280"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 730.4770086878705,
            "unit": "iter/sec",
            "range": "stddev: 0.0001230142139224866",
            "extra": "mean: 1.3689684796462849 msec\nrounds: 565"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 330.9606519732969,
            "unit": "iter/sec",
            "range": "stddev: 0.00010158904905032059",
            "extra": "mean: 3.0215072215916585 msec\nrounds: 176"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 98.32330142164834,
            "unit": "iter/sec",
            "range": "stddev: 0.01670586164968719",
            "extra": "mean: 10.170529117117553 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 273.4804193767182,
            "unit": "iter/sec",
            "range": "stddev: 0.00022712410395965378",
            "extra": "mean: 3.6565689137053132 msec\nrounds: 197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 110.69190455345083,
            "unit": "iter/sec",
            "range": "stddev: 0.0006933382231223482",
            "extra": "mean: 9.034084326529234 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6654845292302581,
            "unit": "iter/sec",
            "range": "stddev: 0.07896556127414413",
            "extra": "mean: 1.5026645340000073 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 296.11467474653296,
            "unit": "iter/sec",
            "range": "stddev: 0.0002449352922869994",
            "extra": "mean: 3.3770700518506076 msec\nrounds: 270"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.60697903457262,
            "unit": "iter/sec",
            "range": "stddev: 0.0001203660560767125",
            "extra": "mean: 10.459487477774903 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 194.3679999658126,
            "unit": "iter/sec",
            "range": "stddev: 0.00004004168752212102",
            "extra": "mean: 5.144879816512441 msec\nrounds: 109"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.81375353231238,
            "unit": "iter/sec",
            "range": "stddev: 0.0008162733999828984",
            "extra": "mean: 10.774265256407908 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5593563637251266,
            "unit": "iter/sec",
            "range": "stddev: 0.001283174870291702",
            "extra": "mean: 390.72323579999875 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 117.62876690728416,
            "unit": "iter/sec",
            "range": "stddev: 0.0008080404780739733",
            "extra": "mean: 8.501321796463335 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1663836469351828,
            "unit": "iter/sec",
            "range": "stddev: 0.08198343820502844",
            "extra": "mean: 6.010206041399999 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 137.3073465412406,
            "unit": "iter/sec",
            "range": "stddev: 0.000049863097679789584",
            "extra": "mean: 7.28293150504986 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 535.5342321290998,
            "unit": "iter/sec",
            "range": "stddev: 0.000029099878951294425",
            "extra": "mean: 1.8672942643168562 msec\nrounds: 454"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.20962439753515,
            "unit": "iter/sec",
            "range": "stddev: 0.0007118051992811852",
            "extra": "mean: 27.616966942857093 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13697.502136927871,
            "unit": "iter/sec",
            "range": "stddev: 0.000005284566680026063",
            "extra": "mean: 73.0060116073312 usec\nrounds: 5600"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 315.06122951232857,
            "unit": "iter/sec",
            "range": "stddev: 0.00023180473987251626",
            "extra": "mean: 3.1739862170533093 msec\nrounds: 258"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 312.73756538954046,
            "unit": "iter/sec",
            "range": "stddev: 0.00025100475741589485",
            "extra": "mean: 3.197569178344205 msec\nrounds: 314"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1939100.7503061006,
            "unit": "iter/sec",
            "range": "stddev: 1.1584438400032852e-7",
            "extra": "mean: 515.7029617167354 nsec\nrounds: 123442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1952478.9938396285,
            "unit": "iter/sec",
            "range": "stddev: 8.523651752570463e-8",
            "extra": "mean: 512.1694026697105 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.713551135867994,
            "unit": "iter/sec",
            "range": "stddev: 0.0027099190727256335",
            "extra": "mean: 583.5834012000191 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 106.05459604048772,
            "unit": "iter/sec",
            "range": "stddev: 0.0007560396665100994",
            "extra": "mean: 9.429105737371694 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5215.877759165293,
            "unit": "iter/sec",
            "range": "stddev: 0.00005549227110267818",
            "extra": "mean: 191.72228456520267 usec\nrounds: 3110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 289.98109505081817,
            "unit": "iter/sec",
            "range": "stddev: 0.00005124145140100988",
            "extra": "mean: 3.448500668034078 msec\nrounds: 244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8250343937697852,
            "unit": "iter/sec",
            "range": "stddev: 0.00261656735033739",
            "extra": "mean: 1.2120706816000166 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.611928405240025,
            "unit": "iter/sec",
            "range": "stddev: 0.0002886554569702509",
            "extra": "mean: 178.1918669999906 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5607.521140929081,
            "unit": "iter/sec",
            "range": "stddev: 0.00004972963694416395",
            "extra": "mean: 178.33191794874182 usec\nrounds: 1950"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 23.42797135702817,
            "unit": "iter/sec",
            "range": "stddev: 0.0013379466655341883",
            "extra": "mean: 42.68402008695514 msec\nrounds: 23"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11992.579184889695,
            "unit": "iter/sec",
            "range": "stddev: 0.000013827734070008408",
            "extra": "mean: 83.38489865966208 usec\nrounds: 3730"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 105.76119776169836,
            "unit": "iter/sec",
            "range": "stddev: 0.0007467196175122311",
            "extra": "mean: 9.455263567014482 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6137776.179582643,
            "unit": "iter/sec",
            "range": "stddev: 9.26403206840013e-9",
            "extra": "mean: 162.9254587885436 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.28809017848538,
            "unit": "iter/sec",
            "range": "stddev: 0.0425588943749604",
            "extra": "mean: 35.350566039999194 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1777.3188701007646,
            "unit": "iter/sec",
            "range": "stddev: 0.00006525979565180485",
            "extra": "mean: 562.6452387484668 usec\nrounds: 1311"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12887.885003163894,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016336372575291591",
            "extra": "mean: 77.59225037735101 usec\nrounds: 4641"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5479.55847698804,
            "unit": "iter/sec",
            "range": "stddev: 0.00004905508495103287",
            "extra": "mean: 182.4964555446577 usec\nrounds: 2002"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 118.17400582426028,
            "unit": "iter/sec",
            "range": "stddev: 0.0007902015999883664",
            "extra": "mean: 8.46209784482661 msec\nrounds: 116"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 157.31548466807266,
            "unit": "iter/sec",
            "range": "stddev: 0.00020184787023657058",
            "extra": "mean: 6.356653333331725 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11943253.441964723,
            "unit": "iter/sec",
            "range": "stddev: 3.809084644287157e-9",
            "extra": "mean: 83.72927903261848 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 671.2724356027569,
            "unit": "iter/sec",
            "range": "stddev: 0.00016974598655545805",
            "extra": "mean: 1.4897081229055207 msec\nrounds: 537"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 117.97452293612848,
            "unit": "iter/sec",
            "range": "stddev: 0.0007854904269472976",
            "extra": "mean: 8.476406389381214 msec\nrounds: 113"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 55.17080382567068,
            "unit": "iter/sec",
            "range": "stddev: 0.0007133098515660013",
            "extra": "mean: 18.12552891489149 msec\nrounds: 47"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 75.80903205913205,
            "unit": "iter/sec",
            "range": "stddev: 0.00008262525878500458",
            "extra": "mean: 13.191040339625848 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5690.4170199670725,
            "unit": "iter/sec",
            "range": "stddev: 0.00004689458762625693",
            "extra": "mean: 175.73404488477834 usec\nrounds: 2072"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 103.76938160681449,
            "unit": "iter/sec",
            "range": "stddev: 0.000788027591638361",
            "extra": "mean: 9.636753968420395 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.06618513960185,
            "unit": "iter/sec",
            "range": "stddev: 0.0004800178953810784",
            "extra": "mean: 21.707896952385738 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 102.42665212504467,
            "unit": "iter/sec",
            "range": "stddev: 0.0007244295386503867",
            "extra": "mean: 9.763083916666323 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 160.96825010670378,
            "unit": "iter/sec",
            "range": "stddev: 0.0039060533324814938",
            "extra": "mean: 6.212405237288179 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 101.20788938874388,
            "unit": "iter/sec",
            "range": "stddev: 0.000760912119576077",
            "extra": "mean: 9.880652645160465 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 5129.462199415857,
            "unit": "iter/sec",
            "range": "stddev: 0.00002333536144345482",
            "extra": "mean: 194.95221158153385 usec\nrounds: 2245"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 230.0728920558579,
            "unit": "iter/sec",
            "range": "stddev: 0.004147241498187635",
            "extra": "mean: 4.346448601851002 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.40617360742253,
            "unit": "iter/sec",
            "range": "stddev: 0.0003299562524033792",
            "extra": "mean: 96.0968015454517 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 85.45964405462696,
            "unit": "iter/sec",
            "range": "stddev: 0.0005863056026232152",
            "extra": "mean: 11.701429499996355 msec\nrounds: 56"
          }
        ]
      }
    ]
  }
}